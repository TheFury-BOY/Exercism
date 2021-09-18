class Bob {
  hey(sentence: string): string {
    sentence = sentence.trim();
    if (this.isShouting(sentence) && !this.isQuerying(sentence)) {
      return 'Whoa, chill out!';
    } else if (this.isQuerying(sentence) && !this.isShouting(sentence)) {
      return 'Sure.';
    } else if (sentence == "") {
      return 'Fine. Be that way!';
    } else if (this.isShoutedQuery(sentence)) {
      return 'Calm down, I know what I\'m doing!';
    } else {
      return 'Whatever.';
    }
  }

  isShouting(sentence: string): boolean {
    return (
        sentence.toUpperCase() === sentence &&
        sentence.toLowerCase() !== sentence
    )
  }

  isQuerying(sentence: string): boolean {
    return (
        sentence.slice(-1) === '?'
    );
  }
  
  isShoutedQuery(sentence: string): boolean {
    return (
        this.isShouting(sentence) &&
        this.isQuerying(sentence)
    );
  }
}

export default Bob
