class CreditCardMask {

  maskify(cc){
    if (cc.length <5){
      return cc
    }
    let detailsLength = cc.length
    let maskingvalue = (detailsLength-4)
    cc = cc.slice(maskingvalue,detailsLength)

    let maseddata = "#"
    let encryption = maseddata.repeat(maskingvalue)
    return encryption+cc
  }

}