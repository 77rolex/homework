<?php

function output($teg, $text)
{
    if ($teg == 'br') {
        echo "<div>$text<$teg></div>";
    } else {
        echo "<div><$teg>$text</$teg></div>";
    }
};

output('br', 'Some text for output');

