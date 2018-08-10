class Algorithm {
  constructor(algorithmType, klass) {
    try {
      if (klass.constructor === Function) {
        this.instance = new klass()
      } else {
        // hydrate text code
        const _klass = (new Function('window', 'document', `${klass};return ${algorithmType};`)).call({}, {}, {})
        this.instance = new _klass()
      }
    } catch (error) {
      throw new Error(`Error loading ${algorithmType}: ${klass} - ${error}`)
    }
  }
}

export default Algorithm
