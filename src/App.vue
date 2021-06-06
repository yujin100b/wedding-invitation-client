<template>
  <div id="app">
    <router-view class="mobile" />
  </div>
</template>

<style>
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

textarea {
  width: 100%;
  resize: none;
  background: #f2f2ed;
  border: 0;
  border-radius: 0;
  padding: 10px;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.section {
  height: 100%;
  background-color: #fff;
}
.divide {
  width: 96%;
  height: 0px;
  margin: 0 auto;
  border: 1px solid #000000;
}

.dropdown {
  position: relative;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  position: absolute;
  top: 52px;
  right: 10px;
  width: 304px;
  height: 148px;
  overflow: scroll;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {
  display: block;
}

#myDropdown {
  text-align: left;
  padding: 1rem;
}

#myDropdown label {
  display: flex;
  font-size: 12px;
  line-height: 17px;
  margin-bottom: 1rem;
  align-items: center;
}

#myDropdown label input[type="checkbox"] {
  display: none !important;
}

#myDropdown label .custom {
  display: inline-block;
  width: 19px;
  height: 19px;
  border-radius: 19px;
  background: #c4c4c4;
  border: 1px solid #000000;
  margin-right: 1rem;
}
#myDropdown label input:checked + .custom {
  background: #bfffff;
}

#smart-button-container {
  display: none;
  position: absolute;
  background: #fff;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border: 1px solid #000;
  padding: 1rem;
  box-sizing: border-box;
}

@media screen and (min-width: 414px) {
  .mobile {
    border: 2px solid #000;
  }
  #smart-button-container {
    width: 300px;
  }
}
</style>
