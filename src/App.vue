<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="scss">
body {
    font-family: 'Titillium Web', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: url(./image/Banner.png);
}

* {
    font-family: 'Titillium Web', sans-serif;
    border: 0;
    margin: 0;
    outline: none;
    list-style: none;
    padding: 0;
    box-sizing: border-box;
}

.container {
    width: 640px;
    margin: 50px auto;
    .main-title {
        color: white;
    }
}

.noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

.main-titile {
    font-size: 'Titillium Web', sans-serif;
    font-weight: 600;
    font-size: 26px;
    line-height: 32px;
    color: #2c2c2c;
}

.add-form {
    background: #ffffff;
    border: 1px solid #e5e7e9;
    box-sizing: border-box;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.02);
    border-radius: 10px;
    padding: 25px;
    margin-bottom: 30px;
    margin-top: 20px;
    cursor: text;

    &__footer {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        button {
            width: 170px;
            height: 45px;
            font-size: 16px;
            font-weight: 500;
            text-align: center;
            color: #ffffff;
            background-color: #ff4c8b;
            border-radius: 6px;
            cursor: pointer;

            &:hover {
                background-color: lighten(#ff4c8b, 5%);
            }

            &:active {
                background-color: darken(#ff4c8b, 5%);
            }

            &:disabled {
                background-color: #d1d7e2;
                box-shadow: none;
                cursor: not-allowed;
            }
        }

        svg {
            margin-right: 20px;
            cursor: pointer;

            &:hover {
                path {
                    fill: #2c2c2c;
                }
            }
        }
    }

    input,
    textarea {
        width: 100%;
        &::-moz-placeholder {
            color: #cfcdcd; /* Цвет подсказывающего текста */
        }
        &::-webkit-input-placeholder {
            color: #cfcdcd;
        }
        &:-ms-input-placeholder {
            color: #cfcdcd;
        }
        &::-ms-input-placeholder {
            color: #cfcdcd;
        }
        &::placeholder {
            color: #cfcdcd;
        }
    }

    input {
        font-size: 28px;
        font-weight: 900;
        margin-bottom: 11px;
    }

    textarea {
        font-size: 18px;
        resize: none;
    }
}

.tabs {
    display: flex;
    margin-bottom: 30px;
    margin-left: 150px;

    li {
        padding: 15px 30px;
        border-radius: 6px;
        margin-right: 15px;
        cursor: pointer;
        background-color: #e7ebef;

        &:hover {
            background-color: lighten(#e7ebef, 3%);
        }

        &.active {
            background-color: #ff4c8b;
        }
    }
}

.ideas {
    &__item {
        $self: &;
        display: flex;
        margin-bottom: 20px;
        align-items: center;
        background-color: #fff;
        border-radius: 10px;
        border: 3px solid #e5e7e9;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.02);
        padding: 25px 30px;

        &--active {
            border-color: #ff4c8b;
            h3 {
                color: #ff4c8b;
            }

            #{$self}-like {
                $like: &;
                &-circle {
                    background-color: #fff9ee;

                    svg {
                        path {
                            fill: #ff4c8b;
                        }
                    }
                }
                &-count {
                    color: #ff4c8b;
                }

                &:hover {
                    #{$self}-like-circle {
                        background-color: #fff6e4;
                        svg {
                            path {
                                fill: #ff4c8b;
                            }
                        }
                    }
                }
            }

            &:active {
                #{$self}-like-circle {
                    background-color: #fff3dd;
                    svg {
                        path {
                            fill: #ff4c8b;
                        }
                    }
                }
            }
        }

        h3 {
            font-size: 28px;
            margin-bottom: 10px;
            margin: 0;
        }
        p {
            font-size: 18px;
            line-height: 26px;
            color: #2c2c2c;
            font-weight: 500;
            margin-bottom: 20px;

            &-footer {
                display: flex;
                opacity: 0.7;
                li {
                    margin-right: 25px;

                    svg {
                        margin-right: 3px;
                    }
                }
            }
        }
        &-like {
            &-circle {
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                height: 64px;
                width: 64px;
                background-color: #f6f6f6;
                margin-bottom: 10px;
                cursor: pointer;

                &:hover {
                    background-color: darken(#f6f6f6, 1%);
                    svg {
                        path {
                            fill: darken(#f6f6f6, 5%);
                        }
                    }
                }

                &:active {
                    background-color: darken(#f6f6f6, 4%);
                    svg {
                        path {
                            fill: darken(#f6f6f6, 9%);
                        }
                    }
                }

                svg {
                    position: relative;
                    top: -2px;
                }
            }
            &-count {
                text-align: center;
                font-weight: 700;
                color: #b3b4b6;
                font-size: 23px;
            }
        }
    }
}
</style>
