class Formatter {
  //add static methods here
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(sentence) {
    const notAllowed = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let splitsentence = sentence.split(" ")
    const result = splitsentence.map(word => {
      if (notAllowed.includes(word))
        return word
      else return Formatter.capitalize(word)
    }).join(" ")
    return result[0].toUpperCase() + result.slice(1)
  }


}
