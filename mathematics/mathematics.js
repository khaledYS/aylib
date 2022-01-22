class Mathematics {

    precentage = {
        findAllByPrec(prec, part){
            return (part * 100) / prec
        },
        findPartByPrec(prec, all){
            return (prec * all) / 100
        }, 
        findPrec(part, all){
            return (part * 100) / all
        }
    }
    
    dots = {
        findAlmail(xOne,yOne,xTwo,yTwo){
            return [yTwo - yOne, xTwo - xOne] 
        }
    }
}

const math = new Mathematics()
math.precentage.toAll()

// export default Mathematics 