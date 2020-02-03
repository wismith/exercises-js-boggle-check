# Boggle Board - Exercises

We're going to create a Boggle board generator and word checker. Read about [Boggle on Wikipedia][wiki-boggle] if you're not familiar with the game.

We're going to model two aspects of Boggle separately.

The first aspect is the process of filling the Boggle board with letters. The Boggle board is a 4x4 grid of dice-sized cells or holes. We place 16 dice on the board (with letters and not numbers) and shake it around until they're all in a separate hole.

To imagine what that might look like, visualize a blank 4x4 grid with a button next to it. When you push the button a letter appears in each of the 16 cells and you can begin playing Boggle.

The second is the process of checking whether a particular word is present on the Boggle board.

## Contents <!-- omit in toc -->

- [Resources](#resources)
- [Remember To Ask Yourself](#remember-to-ask-yourself)
- [Iterations](#iterations)
  - [[v1] "Stupid" Boggle Board](#v1-stupid-boggle-board)
  - [[v2] Smart(er) Boggle Board](#v2-smarter-boggle-board)
  - [[v3] Dealing With Q](#v3-dealing-with-q)
  - [[v4] Simple Word Checking](#v4-simple-word-checking)
  - [[v5] Full Word Checking (Stretch)](#v5-full-word-checking-stretch)

## Resources

- [Boggle on Wikipedia][wiki-boggle]
- [Play Boggle Online][url-boggle]

## Remember To Ask Yourself

- Do I have a clear understanding of how this procedure works?
- Am I stuck because I know what I want to do but don't know how to say it in Ruby?
- Am I stuck because my understanding of how Boggle works is too fuzzy or mistaken?

## Iterations

### [v1] "Stupid" Boggle Board

Standard Boggle dice are designed so that it's likely they'll generate English words. For example, the letter E is much more likely to appear than the letter X.

Let's start with a simpler version that fills the board with random letters. Write a function `shake` that modifies the supplied boggle board, filling each cell with a random letter between `A` and `Z`.

There are no other restrictions on the letters.  They can appear multiple times, for example.  Just pick a flippin' random letter and don't sweat it, ok?

### [v2] Smart(er) Boggle Board

We need to model the dice, now. Think carefully about how shaking a Boggle board works. Each die lands in one and only one cell, with one side facing up.

Can you think of a way to model a die landing in only one cell without explicitly keeping track of which dice have landed and which haven't?  One way to do this is using a secondary `Array`, can you think of another?

Here's a list of Boggle dice, with `Q` representing `Qu`:

```text
AAEEGN
ELRTTY
AOOTTW
ABBJOO
EHRTVW
CIMOTU
DISTTY
EIOSST
DELRVY
ACHOPS
HIMNQU
EEINSU
EEGHNW
AFFKPS
HLNNRZ
DEILRX
```

### [v3] Dealing With Q

Assuming we wanted `Qu` to be printed rather than `Q`, how could we make that happen?

There are several ways of making this happen, especially if you keep in mind that how the board appears to the computer — how it's represented in your program — doesn't have to be how it appears to the person using the program.

Consider a few ways to make "Qu" print instead of just "Q", deliberate on the tradeoffs for a few minutes, and implement one.  You'll probably want to change how the board is printed, too, since "Qu" will throw everything out of alignment.

For example, something like this might be appropriate:

```console
> printBoggleBoard(board);
U  N  O  T
S  E  W  G
S  V  L  T
L  Qu C  F
```

Check out the [String.prototype.padEnd()][mdn-string-padend] function for an easy way to add the correct number of spaces for display.

### [v4] Simple Word Checking

Normally, each letter of a word can appear next to the previous letter in any direction (vertical, horizontal, or diagonal). You can't use the same board cell twice.

Instead, let's first solve a simpler version. In this version, a word is only ever entirely vertical, entirely horizontal, or entirely vertical.

Write pseudocode for your algorithm. If you're pairing, you and your pair should each write your own pseudocode and compare.

Write a function that looks like this which checks whether the board contains a particular word:

```javascript
function boggleBoardContainsWord(board, word) {
  // ...
}
```

### [v5] Full Word Checking (Stretch)

Modify `boggleBoardContainsWord` so that it follows the real Boggle rules.

[wiki-boggle]: http://en.wikipedia.org/wiki/Boggle
[url-boggle]: http://www.wordplays.com/boggle
[mdn-string-padend]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
