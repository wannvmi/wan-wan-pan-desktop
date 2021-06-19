<template>
  <div class="nav-sider">
    <div class="nav-sider-logo">
      <div class="nav-sider-logo-img">
        <img src="@/assets/images/logo.jpg">
      </div>
      <span>
        万万盘
      </span>
    </div>

    <div class="nav-menu">
      <router-link
        v-for="(item, key) in menuList"
        :key="key"
        class="nav-menu-item"
        :to="{ name: item.name }"
      >
        <div class="nav-menu-item-icon">
          <v-icon
            size="24"
            color="var(--context_secondary)"
          >
            {{ item.icon }}
          </v-icon>
        </div>
        <span>{{ item.title }}</span>
      </router-link>

      <div class="nav-divider">
        <v-divider />
      </div>
      <router-link
        class="nav-menu-item"
        :to="{ name: 'TransmissionList' }"
      >
        <div class="nav-menu-item-icon">
          <v-icon
            size="24"
            color="var(--context_secondary)"
          >
            mdi-file-swap-outline
          </v-icon>
        </div>
        <span>传输列表</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          name: 'FileManagement',
          title: '文件',
          icon: 'mdi-file-outline'
        },
        {
          name: 'PhotoAlbum',
          title: '相册',
          icon: 'mdi-file-image-outline'
        },
        {
          name: 'Favorites',
          title: '收藏夹',
          icon: 'mdi-star-outline'
        },
        {
          name: 'Safe',
          title: '保险箱',
          icon: ' mdi-lock-outline'
        },
        {
          name: 'RecycleBin',
          title: '垃圾桶',
          icon: 'mdi-trash-can-outline'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-sider {
  display: flex;
  flex-direction: column;
  // height: 100%;
  width: 240px;
  padding-top: 36px;

  @extend %unselect;

  .nav-sider-logo {
    width: 108px;
    height: 24px;
    margin: 0px 0px 36px 24px;

    display: inline-flex;

    .nav-sider-logo-img {
      width: 24px;
      height: 24px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 12px;
      }
    }

    span {
      color: var(--context_primary);
      padding-left: 9px;
      display: block;
      height: 19px;
      font-weight: 600;
      letter-spacing: 3px;
    }
  }

  .nav-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    line-height: 1.5;

    .nav-menu-item {
      width: 216px;
      height: 44px;
      padding-left: 12px;
      line-height: 14px;
      display: flex;
      align-items: center;
      color: var(--context_primary);
      cursor: pointer;
      transition: background-color 0.3s ease;
      border-radius: 10px;
      position: relative;

      &.is-active {
        font-weight: 500;
        background-color: var(--divider_tertiary);
      }

      &.router-link-active {
        @extend .is-active;
      }
      &:hover {
        @extend .is-active;
      }

      .nav-menu-item-icon {
        width: 24px;
        margin-right: 16px;
      }
    }
  }

  .nav-divider {
    width: 216px;
    padding-left: 12px;
    padding: 12px 0;
  }
}
</style>
