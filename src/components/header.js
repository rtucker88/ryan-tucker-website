import React from 'react';

const Header = () => (
  <header id="header">
    <nav>
      <ul>
        <li><a href="javascript:;" onClick={() => {props.onOpenArticle('home')}}>Home</a></li>
        <li><a href="javascript:;" onClick={() => {props.onOpenArticle('portfolio')}}>Portfolio</a></li>
        <li><a href="javascript:;" onClick={() => {props.onOpenArticle('talks')}}>Talks</a></li>
        <li><a href="javascript:;" onClick={() => {props.onOpenArticle('social')}}>Social</a></li>
      </ul>
    </nav>
  </header>
)

export default Header
