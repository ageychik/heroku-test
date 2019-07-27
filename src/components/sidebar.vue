<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" :class="{ 'small' : settings.smallSidebar  }">
        <div class="menu-icon-box" @click="toggleSidebar()">

            <menu-icon></menu-icon>

        </div>

        <div class="menu-icon-box">

            <router-link class="menu-home-icon menu-icon" :to="'/'">
                <span class="nav-icon"><home-icon></home-icon></span>
            </router-link>

        </div>
        <div class="navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto sidenav" id="navAccordion">
                <!--<li class="nav-item">-->

                <!--</li>-->
                <li class="nav-item">
                    <router-link class="nav-link" :to="'introduction'">
                        <span class="nav-icon"><app-icon class="navbar-icon"></app-icon></span>
                        <span class="note-item">introduction</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="'reference'">
                        <span class="nav-icon"><app-icon class="navbar-icon"></app-icon></span>
                        <span class="note-item">reference</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="'demo'">
                        <span class="nav-icon"><app-icon class="navbar-icon"></app-icon></span>
                        <span class="note-item">demo</span>
                    </router-link>
                </li>
            </ul>
            <form class="form-inline ml-auto mt-2 mt-md-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Dearch</button>
            </form>
        </div>
    </nav>
</template>

<script>
    import menuIcon from '../elements/icons/menu-icon.vue';
    import homeIcon from '../elements/icons/home-icon.vue';
    import appIcon from '../elements/icons/app-icon.vue';

    export default {
        name: "sidebar",
        props: {},

        data() {
            return {
                settings: {
                    smallSidebar: false,

                }
            }
        },
        components: {
            menuIcon, homeIcon, appIcon
        },
        created() {

        },

        methods: {
            toggleSidebar: function () {
                this.settings.smallSidebar = !this.settings.smallSidebar
            }
        },
        watch: {
            'settings.active': function () {

            },
            'settings.smallSidebar': function () {

            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "/../assets/scss/main";

    @keyframes menu-icon {
        70% {
            transform: scale(5);
            opacity: 0;
        }
        71% {
            fill: #fff;
            transform: scale(1);
        }
        100% {
            opacity: 1;
            fill: #111;
        }
    }

    .navbar {
        left: 0;
        right: 0;
        z-index: 10;
        position: fixed;
        top: 0;
        color: #fff;
        &:not(.small) {
            .navbar-nav {
                .nav-item.active {
                    .nav-second-level {
                        display: block;
                    }
                }
            }
        }
        &.small {
            .navbar-nav {
                transform: translateX(- ($big-sidebar - $small-sidebar));
                .nav-item {
                    .nav-link {
                        .nav-icon {
                            transform: translateX($big-sidebar - $small-sidebar);
                        }
                        .note-item {
                            position: absolute;
                            background: rgba(0, 0, 0, 0.9);
                            color: #fff;
                            padding: 7px 20px;
                            border-radius: 3px;
                            top: 50%;
                            left: calc(100% + 10px);
                            white-space: nowrap;
                            transform: translate(20px, -50%);
                            opacity: 0;
                            line-height: 1;
                            transition: all .3s;
                            pointer-events: none;
                        }
                        &:not(.active):hover {
                            .note-item {
                                transform: translate(0, -50%);
                                opacity: 1;
                            }
                        }
                    }
                }
            }
        }
        .navbar-nav {
            position: fixed;
            top: 0;
            left: 0;
            width: $big-sidebar;
            height: 100vh;
            padding-top: 3.5rem;
            background: #343a40;
            box-sizing: border-box;
            border-top: 1px solid rgba(0, 0, 0, 0.3);
            flex-direction: column;
            transition: all .3s;
            .nav-item {
                text-align: left;
                border-bottom: 1px solid #999;
                text-transform: uppercase;
                &:not(.active) {
                    .nav-link {
                        .nav-icon {
                            .navbar-icon {
                                fill: rgba(255, 255, 255, .5);
                            }
                        }
                    }
                }
                &.active {
                    .nav-link {
                        .nav-icon {
                            .navbar-icon {
                                fill: #000;
                            }
                        }
                    }
                }
                .nav-link {
                    position: relative;
                    &:not(.active) {
                        &:hover {
                            color: #fff;
                            .nav-icon {
                                .navbar-icon {
                                    fill: #fff;
                                }
                            }
                        }
                        .note-item {
                            &:before {
                                content: '';
                                width: 0;
                                height: 0;
                                border-right: 7px solid rgba(0, 0, 0, .9);
                                border-bottom: 5px solid transparent;
                                border-top: 5px solid transparent;
                                position: absolute;
                                left: -7px;
                            }
                        }
                    }
                    &.active {
                        cursor: default;
                        background: #fff;
                        color: #333;
                        .nav-icon {
                            .navbar-icon {
                                fill: #000;
                            }
                        }
                        svg {
                            fill: #000;
                        }
                    }
                    .nav-icon {
                        width: 30px;
                        height: 30px;
                        vertical-align: text-bottom;
                        display: inline-block;
                        position: relative;
                        margin-right: 10px;
                    }
                }
            }
        }
        .menu-icon-box {
            height: 30px;
            position: relative;
            z-index: 1;
            opacity: 1;

        }
        .menu-icon {
            fill: #fff;
            margin-right: 10px;

            &:hover {
                animation: .15s linear menu-icon;
                fill: #111;
            }
        }

        .menu-home-icon {
            display: inline-block;
            width: 30px;
            height: 28px;
            padding: 0 5px;
            box-sizing: content-box;

        }
    }
</style>