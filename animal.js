// base class
class Animal {
  constructor() {
    if (this.constructor == Animal) {
      throw new Error("You can't intantiate this class");
    }
  }
  // abtract method
  isVetebrate() {
    // to check if it has a backbone
    // throw new Error("You can't call this method directly");
  }
}

// cold Blooded animal
class Cold_Blooded extends Animal {
  //   constructor() {
  //     super();
  //   }
  isColdBlood() {
    return true;
  }
}

// warm blooded animals
class Warm_Blooded extends Animal {
  //   constructor() {
  //     super();
  //   }
  isWarmBlood() {
    return true;
  }
}

// arthropods
class Arthropoda extends Cold_Blooded {
  isVetebrate() {
    return false;
  }
}

//fish
class Fish extends Cold_Blooded {
  isVetebrate() {
    return true;
  }
}

// Amphibia
class Amphibia extends Cold_Blooded {
  isVetebrate() {
    return true;
  }
}

// reptiles
class Reptiles extends Cold_Blooded {
  isVetebrate() {
    return true;
  }
}

// Aves
class Aves extends Warm_Blooded {
  isVetebrate() {
    return true;
  }
}

// Mammals
class Mammals extends Warm_Blooded {
  isVetebrate() {
    return true;
  }
}

const animal = new Cold_Blooded();
console.log(animal.isColdBlood());
