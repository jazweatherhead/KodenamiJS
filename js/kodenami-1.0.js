var config = {
  time_to_enter_key: 1000 // 1 sec (you can change me to adjust difficulty)
}

function onSuccess () { // what happens on successfully entering the code
  console.log('30 lives! :)')
}

var code = [ // sequential keycodes required to activate code
  38,
  38,
  40,
  40,
  37,
  39,
  37,
  39,
  66,
  65,
  13
]
var keynames = {
  37: 'Left',
  38: 'Up',
  39: 'Right',
  40: 'Down',
  66: 'B',
  65: 'A',
  13: 'Start'
}
var entered = []
var code_ndx = 0
var time_of_last_code_keypress
var time_since_last_code_keypress = 0

function compareArraysByValue (old_array, new_array) {
  var old_len = old_array.length
  for (var x = 0; x <= old_len; x++)
    if (new_array[x] !== old_array[x]) return false
  return true
}

setInterval(function () {
  /* check how long its been */
  var date_now = new Date()
  var time_now = date_now.getTime()
  time_since_last_code_keypress = time_now - time_of_last_code_keypress
  
  if ((time_since_last_code_keypress >= 1000) && (time_since_last_code_keypress < 3000)) {
    // reset if they take too long
    entered = []
    code_ndx = 0
  }
}, config.time_to_enter_key)

jQuery(document).bind('keydown', function (e) {
  var kc = e.keyCode
  if (kc === code[code_ndx]) { // if kc is next in sequence
    var keyname = keynames[kc]
    
    /* set time of last successful keypress */
    var date = new Date()
    var now = date.getTime()
    time_of_last_code_keypress = now

    code_ndx++

    entered.push(kc)
  } else {
    console.log('wrong key')
    entered = [] // reset on wrong key
  }

  /* Uncomment for testing */
  // if (e.keyCode === 37) {
  //   e.preventDefault()
  //   console.log('left!')
  // }
  // if (e.keyCode === 38) {
  //   e.preventDefault()
  //   console.log('up!')
  // }
  // if (e.keyCode === 39) {
  //   e.preventDefault()
  //   console.log('right!')
  // }
  // if (e.keyCode === 40) {
  //   e.preventDefault()
  //   console.log('down!')
  // }
  // if (e.keyCode === 66) {
  //   e.preventDefault()
  //   console.log('b!')
  // }
  // if (e.keyCode === 65) {
  //   e.preventDefault()
  //   console.log('a!')
  // }
  // if (e.keyCode === 13) {
  //   e.preventDefault()
  //   console.log('start!')
  // }

  if (compareArraysByValue(code, entered)) {
    code_ndx = 0
    onSuccess()
  }
})
