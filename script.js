let user = prompt('What is your name?')
alert(`Hello ${user}, welcome to a game of survival!`)

const playGame = () => {
  let choiceOne = prompt(
    'Would you like to go inside, outside, or go home? Please enter INSIDE or OUTSIDE or HOME.'
  )
  if (choiceOne === 'INSIDE') {
    let inside = prompt(
      'Good choice! It is warm in here. You see a staircase leading upstairs, as well as one leading down to the basement. Enter UPSTAIRS or BASEMENT'
    )
    if (inside === 'UPSTAIRS') {
      alert('You found a nice bed to sleep in and are safe. Congratulations!')
    } else if (inside === 'BASEMENT') {
      alert('Why would you go to the basement? You have perished.')
    } else {
      alert('This is not a valid choice. Is your keyboard missing keys?')
    }
  } else if (choiceOne === 'OUTSIDE') {
    let outside = prompt(
      'You have gone outside, it is a bit windy. You see a forest off to the west, and an ocean to the east. In which direction would you like to head? Enter WEST or EAST.'
    )
    if (outside === 'EAST') {
      alert(
        'You went east to the ocean, you had a hard time swimming and perished.'
      )
    } else if (outside === 'WEST') {
      let west = prompt(
        'You went west towards the forest. Would you like to start building a shelter, or go look for berries? Enter SHELTER or BERRIES.'
      )
      if (west === 'BERRIES') {
        let berries = prompt(
          'You found some berries and now have energy to build your shelter. You can now either build your shelter, take a nap, or go east to the ocean. Enter SHELTER; NAP; or EAST'
        )
        switch (berries) {
          case 'SHELTER':
            alert('You made some shelter. Congratulations you are a survivor.')
            break
          case 'NAP':
            let nap = prompt('Are you ready to gamble? Enter 1 or 2.')
            if (parseInt(nap, 10) === 1) {
              alert(
                'You have chosen 1. A bear found you while you were napping and you did perish.'
              )
            } else if (parseInt(nap, 10) === 2) {
              alert(
                'You have chosen 2. You wake up from your nap and continue on to live like Bear Grylls... WINNNER!'
              )
            } else {
              alert('NaN.')
            }
            break
          case 'EAST':
            alert(
              'You didnt like the trees and decided to go back east. You swim, but didnt wait half an hour after eating, and you perish.'
            )
            break
          default:
            alert('Invalid entry.')
        }
      } else if (west === 'SHELTER') {
        alert(
          'You started building a shelter, but soon ran out of energy due to a lack of sustenance. A bear found you and you could not outrun it, you have perished.'
        )
      } else {
        alert('This was an invalid entry.')
      }
    } else {
      alert('This is not a valid entry. Is your cat sitting on your keyboard?')
    }
  } else if (choiceOne === 'HOME') {
    alert(
      'You have decided to go home. This appears to be the wisest choice of all, you are safe.'
    )
  } else {
    alert('This is not a valid option, can you use a keyboard properly?')
  }
  const playAgain = prompt('Do you want to play again? Y/N')
  if (playAgain === 'Y') {
    playGame()
  }
}
playGame()
