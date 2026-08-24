import random

# range's max number
MAX_NUMBER = 10
play_again = True

while play_again:
	# pick random number
	target = random.randint(1, MAX_NUMBER)
	# let player guess
	guess = input(f"Guess a number between 1 and {MAX_NUMBER}: ")
	# number of guesses
	num_guesses = 1
	while guess != 'q' and guess != 'Q' and int(guess) != target:
		guess = input("Nope! Try again! ")
		num_guesses += 1

	# player quits
	if guess == 'q' or guess == 'Q':
		print("Quitter")
		break

	# final number of guesses
	print(f"That took you {num_guesses} guesses.")

	if num_guesses < 3:
		print("You must be psychic!")
	elif num_guesses < 6:
		print("Not bad.")
	elif num_guesses < 8:
		print("You may win...eventually")
	else:
		print("That's truly pathetic.")

	# play again
	response = input("\nDo you want to play again? y/n: ")
	play_again = response in ("y", "Y")

print("Goodbye!")
