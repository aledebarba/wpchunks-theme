<?php 
/**
 * Function dummyContent is part of wpchunks component model.
 * It's used to create a generic html content anywhere is needed
 * 
 * @param array $args is an array of arguments that can be passes to the function and defaults to an empty array.
 */
require_once('vendor/autoload.php');
$lipsum = new joshtronic\LoremIpsum();
list($mainTitle, $mainText) = $params;
Import::component('react_function_helloWorld')->from('hello-react');
?>
<div class="dummy-content">
    <div class="dummy-content__header" style="background-image: url(https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);">
        <h1><?= $mainTitle ?></h1>
        <p><?= $mainText ?></p>        
    </div>
    <div class="dummy-content__main">
        <div class="dummy-content__row">
            <div class="col-50">
                <div class="featured">
                    <div class="post">
                        <h3>Category: <?= ucfirst($lipsum->words(1)) ?></h3>
                        <h4>01/01/2020</h4>
                        <img src="https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=720" alt="post image"/>
                        <h1><?= ucfirst($lipsum->words(5)) ?></h1>
                        <div class="text">
                            <?= $lipsum->paragraphs(3,'p') ?>
                        </div>
                        <a href="#">Read More</a>
                    </div>
                    <?php react_function_helloWorld("hell",4); ?>
                </div>
            </div>
            <div class="col">
                <div class="post-list"><?php
                    foreach( [
                        "https://images.pexels.com/photos/207891/pexels-photo-207891.jpeg?auto=compress&cs=tinysrgb&w=450",
                        "https://images.pexels.com/photos/243206/pexels-photo-243206.jpeg?auto=compress&cs=tinysrgb&w=450",
                        "https://images.pexels.com/photos/158838/pexels-photo-158838.jpeg?auto=compress&cs=tinysrgb&w=450",
                        "https://images.pexels.com/photos/63637/crocodile-sitting-alligator-animal-63637.jpeg?auto=compress&cs=tinysrgb&w=450",
                        "https://images.pexels.com/photos/65451/pexels-photo-65451.jpeg?auto=compress&cs=tinysrgb&w=450",
                        "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=450"
                    ] as $img ) { ?>
                    <div class="post">
                        <h3>Category: <?= ucfirst($lipsum->words(1)) ?></h3>
                        <h4>01/01/2020</h4>
                        <img src="<?= $img ?>" alt="post image"/>
                        <h1><?= ucfirst( $lipsum->words( rand(4, 8))) ?></h1>
                        <div class="text">
                            <p><?= $lipsum->paragraphs(2,'p') ?><p>
                        </div>
                        <a href="#">Read More</a>
                    </div>
                    <?php  } ?>
                </div>
            </div>
        </div>
    </div>
</div>

