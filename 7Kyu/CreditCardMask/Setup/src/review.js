class CreditCardMask {

  maskify(cc){
    if (cc.length <5){
      return cc
    }
    let detailsLength = cc.length
    let maskingvalue = (detailsLength-4)
    cc = cc.slice(maskingvalue,detailsLength)

    let mask = "#"
    mask.repeat(maskingvalue)



    return mask+cc
  }

}