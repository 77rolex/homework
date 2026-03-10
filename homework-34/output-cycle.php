<?php

function outputCycle($teg, $text, $count)
{
    $i = 0;
    while ($i < $count) {
        if ($teg == 'br') {
            echo "<div>$text<$teg></div>";
            $i++;
        } else {
            echo "<div><$teg>$text</$teg></div>";
            $i++;
        }
    }
};

outputCycle('br', 'Some text for outputCycle', 3);
