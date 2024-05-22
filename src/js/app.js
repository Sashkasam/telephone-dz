export default function telePhone(number) {
    if(number.startsWith('+7') || number.startsWith('8') || number.startsWith('7')) {
       // eslint-disable-next-line no-useless-escape
        return number.replace(/^\+?(\d{1,2})\ ?\(?(\d{3})\)?\ ?(\d{3})\-?\ ?(\d{2}?)\-?\ ?(\d{2}?)$/gm,
     '+7$2$3$4$5');
    }else{
      // eslint-disable-next-line no-useless-escape
        return number.replace(/^\+?(\d{1,2})\ ?\(?(\d{3})\)?\ ?(\d{3})\-?\ ?(\d{2}?)\-?\ ?(\d{2}?)/gm,
      '+$1$2$3$4$5');
    }
  }