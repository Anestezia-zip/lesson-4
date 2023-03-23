import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson01',
  templateUrl: './lesson01.component.html',
  styleUrls: ['./lesson01.component.scss']
})
export class Lesson01Component {
  public words: string[] = [];
  public badWords = '';

  addWords() {
    const inputWord = document.querySelector('.input-word') as HTMLInputElement;
    if (inputWord.value === '') {
      inputWord.placeholder = 'Please write a word!';
      inputWord.style.border = '1px solid red';
    }
    else {
      inputWord.placeholder = 'word here..';
      inputWord.style.border = 'none'
      const word = inputWord.value;
        if (word) {
          this.words.push(word);
          this.badWords = this.words.map(w => `${w}`).join(', ');
        }
    }
    
    inputWord.value = '';
  }

  resetWords() {
    this.badWords = '';
    this.words.length = 0;
  }

  censorWords() {
    const textarea = document.querySelector('.textarea') as HTMLTextAreaElement;
    if (textarea.value === '') {
      textarea.placeholder = 'Please write a text!';
      textarea.style.border = '1px solid red'
    }
    else {
      const text = textarea.value;
      let censoredText = text;
        this.words.forEach(word => {
          const regex = new RegExp(word, 'gi');
          censoredText = censoredText.replace(regex, '*'.repeat(word.length));
        });
      textarea.value = censoredText;
      textarea.style.border = '1px solid green'
    }
  }
}











































// word: string = '';
//   words: string[] = [];

//   addWord() {
//     if (this.word === '') {
//       this.word = '';
//       document.querySelector('.input-word')?.setAttribute('placeholder', 'Please write a word!');
//       document.querySelector('.input-word')?.setAttribute('style', 'border: 1px solid red;');
//       return;
//     }

//     document.querySelector('.input-word')?.setAttribute('placeholder', 'word here..');
//     document.querySelector('.input-word')?.setAttribute('style', 'border: none;');
//     this.words.push(this.word);
//     this.word = '';
//   }

// <div class="bad-words">
// 				<span *ngFor="let w of words">{{ w }}</span>
// </div>