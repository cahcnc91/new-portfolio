<template>
  <header class="header">

                <div class="header__logo-box">
                    <img src="../../images/logo.png" alt="logo" class="header__logo">
                </div>
                <div class="header__text-static">
                    <h2></h2>
                </div>

            <div class="header__text-box">
                <typewriter
                    class="typewrite"
                    :speed="200"
                    :full-erase="true"
                    :interval="800"
                    :words="[`Hey, I'm Camila`, `I'm a full-stack developer`, `Let's talk about coding`]"
                >
                 </typewriter>
            </div>
               
            <div class="header__button">
                <a href="#project-see" class="button button--white button--animated">View my work <span class="button--animated--rotate"><i class="fa fa-arrow-right"></i></span></a>
            </div>
        </header>
</template>
