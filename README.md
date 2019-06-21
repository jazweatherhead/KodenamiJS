# KodenamiJS

## Huh?
Kodenami lets you awesome up your site with a secret code from the '80s. Don't let all that muscle memory go to waste. You can use this to hide Easter Eggs of many kinds all over your site. It's fun!

## Demo?
http://kodenamijs.herokuapp.com/

## How?
Kodenami constantly scans for keypresses. When it finds the one that starts the code (up arrow) it looks for the next in the sequence and so on. If you make a mistake you have to start over. You can adjust the difficulty by changing the time it gives you to enter each key.

## No I mean specifically how?
1) In your HTML link to jQuery and Kodenami in that order.

2) (OPTIONAL) Change the time variable in the config object at the head of kodenami-X.X.js to tweak the difficulty.

3) Put what you want to happen when someone correctly enters the code in onSuccess().

3) Now the code will trigger anything you set it to (like showing a hidden div, for example) any time a user enters it correctly (and fast enough).

## My arrow keys don't work!
They work, I just told them to do something else. If you want your precious keys back (all 7 of them) just comment out all the lines with e.preventDefault() on them

## Neat!
I know, right?

**KodenamiJS. Because you can't beat the web with just 3 lives.**

*Jasmyn Weatherhead has made hundreds of apps. If you need help with yours she’d love to hear from you. http://www.weatherheadconsulting.com*
