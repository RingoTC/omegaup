import { shallowMount } from '@vue/test-utils';

import T from '../../lang';

import common_NavbarBs3 from './NavbarBs3.vue';

describe('NavbarBs3.vue', () => {
  it('Should handle empty navbar (in contest only)', async () => {
    const wrapper = shallowMount(common_NavbarBs3, {
      propsData: {
        currentUsername: 'user',
        errorMessage: null,
        graderInfo: null,
        graderQueueLength: -1,
        gravatarURL51:
          'https://secure.gravatar.com/avatar/568c0ec2147500d7cd09cc8bbc8e5ec4?s=51',
        inContest: true,
        clarifications: [],
        isAdmin: false,
        isLoggedIn: true,
        isMainUserIdentity: true,
        isReviewer: false,
        lockDownImage: 'data:image/png;base64...',
        navbarSection: '',
        omegaUpLockDown: false,
        allIdentities: [{ username: 'user', default: true }],
      },
    });

    expect(wrapper.find('.nav-contests').exists()).toBe(false);
    expect(wrapper.find('.nav-courses').exists()).toBe(false);
    expect(wrapper.find('.nav-problems').exists()).toBe(false);
    expect(wrapper.find('.nav-rank').exists()).toBe(false);
  });

  it('Should handle common navbar to logged user', async () => {
    const wrapper = shallowMount(common_NavbarBs3, {
      propsData: {
        currentUsername: 'user',
        errorMessage: null,
        graderInfo: null,
        graderQueueLength: -1,
        gravatarURL51:
          'https://secure.gravatar.com/avatar/568c0ec2147500d7cd09cc8bbc8e5ec4?s=51',
        inContest: false,
        clarifications: [],
        isAdmin: false,
        isLoggedIn: true,
        isMainUserIdentity: true,
        isReviewer: false,
        lockDownImage: 'data:image/png;base64...',
        navbarSection: '',
        omegaUpLockDown: false,
        associatedIdentities: [{ username: 'user', default: true }],
      },
    });

    expect(wrapper.find('.nav-contests').exists()).toBe(true);
    expect(wrapper.find('.nav-courses').exists()).toBe(true);
    expect(wrapper.find('.nav-problems').exists()).toBe(true);
    expect(wrapper.find('.nav-rank').exists()).toBe(true);
  });

  it('Should handle common navbar to not-logged user', async () => {
    const wrapper = shallowMount(common_NavbarBs3, {
      propsData: {
        currentUsername: 'user',
        errorMessage: null,
        graderInfo: null,
        graderQueueLength: -1,
        gravatarURL51:
          'https://secure.gravatar.com/avatar/568c0ec2147500d7cd09cc8bbc8e5ec4?s=51',
        inContest: false,
        clarifications: [],
        isAdmin: false,
        isLoggedIn: false,
        isMainUserIdentity: true,
        isReviewer: false,
        lockDownImage: 'data:image/png;base64...',
        navbarSection: '',
        omegaUpLockDown: false,
        associatedIdentities: [{ username: 'user', default: true }],
      },
    });

    expect(wrapper.find('.nav-problems').exists()).toBe(true);
    expect(wrapper.find('.nav-rank').exists()).toBe(true);
    expect(wrapper.find('.navbar-right').text()).toBe(T.navLogIn);
  });
});