require 'spec_helper'

describe 'accounts::user', :type => :define do
  let(:facts) {{
    :osfamily => 'Debian',
    :puppetversion => Puppet.version,
  }}

  shared_examples 'not_having_home_dir' do |user, home_dir|
    let(:owner) { user }
    let(:group) { user }

    it { should_not contain_file("#{home_dir}").with({
      'ensure'  => 'directory',
      'owner'   => owner,
      'group'   => group,
      'mode'    => '0755'
    }) }

    it { should_not contain_file("#{home_dir}/.ssh").with({
      'ensure'  => 'directory',
      'owner'   => owner,
      'group'   => group,
      'mode'    => '0700'
    }) }

    it { should_not contain_file("#{home_dir}/.ssh/authorized_keys").with({
      'ensure'  => 'present',
      'owner'   => owner,
      'group'   => group,
      'mode'    => '0600'
    }) }
  end

  shared_examples 'having_home_dir' do |user, group, home_dir|
    let(:owner) { user }
    let(:group) { group }

    it { should contain_file("#{home_dir}").with({
      'ensure'  => 'directory',
      'owner'   => owner,
      'group'   => group,
      'mode'    => '0755'
    }) }

    it { should contain_file("#{home_dir}/.ssh").with({
      'ensure'  => 'directory',
      'owner'   => owner,
      'group'   => group,
      'mode'    => '0700'
    }) }

    it { should contain_file("#{home_dir}/.ssh/authorized_keys").with({
      'ensure'  => 'present',
      'owner'   => owner,
      'group'   => group,
      'mode'    => '0600'
    }) }
  end

  context 'create new user' do
    let(:title) { 'foobar' }
    let(:owner) { 'foobar' }
    let(:group) { 1001 }
    let(:params){{
      :uid => 1001,
      :gid => 1001,
    }}

    it { should contain_user('foobar').with(
      'uid' => 1001,
      'gid' => 1001
    )}

    it_behaves_like 'having_home_dir', 'foobar', '1001', '/home/foobar'
  end

  context 'create new user without specified uid' do
    let(:title) { 'foobar' }
    let(:owner) { 'foobar' }
    let(:group) { 'foobar' }

    it_behaves_like 'having_home_dir', 'foobar', 'foobar', '/home/foobar'
  end

  context 'custom home directory' do
    let(:title) { 'foobar' }
    let(:owner) { 'foobar' }
    let(:group) { 'foobar' }
    let(:home) { '/var/www' }

    let(:params){{
      :home => home,
    }}

    it_behaves_like 'having_home_dir', 'foobar', 'foobar', '/var/www'
  end

  context 'not managing home' do
    let(:title) { 'foobar' }
    let(:home) { '/var/www' }

    let(:params){{
      :home       => home,
      :managehome => false
    }}

    it_behaves_like 'not_having_home_dir', 'foobar', '/var/www'
  end


  context 'root home' do
    let(:title) { 'root' }

    # root has automatically special home folder
    it_behaves_like 'having_home_dir', 'root', 'root', '/root'
  end

  context 'invalid ensure' do
    let(:title) { 'foo' }
    let(:home) { '/home/foo' }

    let(:params){{
      :home       => home,
      :managehome => false,
      :ensure     => 'whatever'
    }}

    it do
      expect {
        should compile
      }.to raise_error(RSpec::Expectations::ExpectationNotMetError, /parameter must be 'absent' or 'present'/)
    end
  end

  context 'remove group with user\'s account' do
    let(:title) { 'mickey' }

    let(:params){{
      :manage_group => true,
      :ensure       => 'absent'
    }}

    it { should contain_user('mickey').with(
      'ensure' => 'absent'
    )}

    it { should contain_exec('killproc mickey')}
    it { should contain_anchor('accounts::user::remove_mickey')}

    it { should contain_group('mickey').with(
      'ensure' => 'absent'
    )}
  end

  context 'remove group with user\'s account without killing his processes' do
    let(:title) { 'mickey' }

    let(:params){{
      :manage_group  => true,
      :ensure        => 'absent',
      :force_removal => false,
    }}

    it { should contain_user('mickey').with(
      'ensure' => 'absent'
    )}
    # don't kill user's process
    it { should_not contain_exec('killproc mickey')}
    it { should contain_anchor('accounts::user::remove_mickey')}

    it { should contain_group('mickey').with(
      'ensure' => 'absent'
    )}
  end

  context 'purge ssh keys' do
    let(:title) { 'john' }
    puppet = Puppet.version
    let(:params){{
      :purge_ssh_keys => true
    }}
    if Gem::Version.new(puppet) < Gem::Version.new('3.6.0')
      it { should contain_user('john').with(
        'ensure' => 'present'
      )}
    else
      it { should contain_user('john').with(
        'ensure'         => 'present',
        'purge_ssh_keys' => true
      )}
    end
  end

  context 'empty comment' do
    let(:title) { 'foo' }
    let(:home) { '/home/foo' }

    let(:params){{
      :home    => home,
      :comment => nil,
    }}

    it { should contain_user('foo').with(
      'ensure' => 'present'
    )}
  end

  context 'supply custom path to authorized_keys file' do
    let(:title) { 'foo' }
    let(:home) { '/home/foo' }

    let(:params){{
      :home                 => home,
      :authorized_keys_file => '/home/foo/.ssh/auth_keys',
      :ssh_key              => {'type' => 'ssh-rsa', 'key' => 'AAAA...' },
    }}

    it { should contain_file('/home/foo/.ssh/auth_keys').with({
      'ensure'  => 'present',
    }) }
  end

  context 'supply custom path to authorized_keys file outside of home dir' do
    let(:title) { 'foo' }
    let(:home) { '/home/foo' }

    let(:params){{
      :home                 => home,
      :authorized_keys_file => '/home/my_auth_keys',
      :ssh_key              => {'type' => 'ssh-rsa', 'key' => 'AAAA...'},
    }}

    it { should contain_file('/home/my_auth_keys').with({
      'ensure'  => 'present',
    }) }

    it { should contain_ssh_authorized_key('foo_ssh-rsa').with(
      'type' => 'ssh-rsa',
      'key' => 'AAAA...',
    ) }
  end

  context 'provide ssh key options' do
    let(:title) { 'foo' }

    let(:params){{
      :ssh_key => {
        'type'    => 'ssh-rsa',
        'key'     => 'AAAA',
        'options' => 'permitopen="10.4.3.29:3306",permitopen="10.4.3.30:5432"'
      },
    }}

    it { should contain_ssh_authorized_key('foo_ssh-rsa').with({
      'key'     => 'AAAA',
      'options' => 'permitopen="10.4.3.29:3306",permitopen="10.4.3.30:5432"'
    })}

    it { should contain_file("/home/foo/.ssh/authorized_keys").with({
      'ensure'  => 'present',
      'owner'   => 'foo',
      'group'   => 'foo',
      'mode'    => '0600'
    }) }
  end

  context 'ssh key with empty comment' do
    let(:title) { 'jane' }

    let(:params){{
      :ssh_key => {
        'type'    => 'ssh-rsa',
        'key'     => 'AAA',
      },
    }}

    it { should contain_ssh_authorized_key('jane_ssh-rsa').with({
      'type' => 'ssh-rsa',
      'key'  => 'AAA',
      'user' => 'jane',
    })}

    it { should contain_user('jane').with(
      'ensure' => 'present'
    )}

  end

  context 'ssh key with empty options' do
    let(:title) { 'jake' }

    let(:params){{
      :ssh_key => {
        'type'    => 'ssh-rsa',
        'options' => '',
        'key'     => 'AAA-jake',
      },
    }}

    it { should contain_ssh_authorized_key('jake_ssh-rsa').with({
      'type' => 'ssh-rsa',
      'key'  => 'AAA-jake',
      'user' => 'jake',
      'options' => '',
    })}

    it { should contain_user('jake').with(
      'ensure' => 'present'
    )}
  end

  context 'ssh key with options array' do
    let(:title) { 'luke' }

    let(:params){{
      :ssh_keys => {
        'luke_key' => {
          'type'    => 'ssh-rsa',
          'options' => ['darth=vader', 'foo=bar'],
          'key'     => 'AAA-luke',
        }
      },
    }}

    it { should contain_ssh_authorized_key('luke_key').with({
      'type' => 'ssh-rsa',
      'key'  => 'AAA-luke',
      'user' => 'luke',
      'options' => ['darth=vader', 'foo=bar'],
    })}

    it { should contain_user('luke').with(
      'ensure' => 'present'
    )}
  end

end
