<?php 
Import::component("filterPostsAndMaps")->from("posts-maps-actions");
  wp_head();
  echo <<<HTML
    <h1>This is a component sandbox</h1>
  HTML;
  filterPostsAndMaps();
  wp_footer();
?>