<template>
  <div class="navigation">
    <input
      type="checkbox"
      name="check-test"
      class="navigation__checkbox"
      id="navi-toggle"
    />
    <label for="navi-toggle" class="navigation__button">
      <span class="navigation__icon">&nbsp;</span>
    </label>
    <div class="navigation__background">&nbsp;</div>

    <nav class="navigation__nav">
      <ul class="navigation__list">
        <li class="navigation__item">
          <a href="#about" class="navigation__link">ABOUT</a>
        </li>
        <li class="navigation__item">
          <a href="#project-see" class="navigation__link">PROJECTS</a>
        </li>
        <li class="navigation__item">
          <a href="#code-samples" class="navigation__link">COMPONENTS</a>
        </li>
        <li class="navigation__item">
          <a href="#contact" class="navigation__link">CONTACT ME</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
