type ToBeOrNotToBe = {
    toBe: (val: any) => boolean,
    notToBe: (val: any) => boolean,
  };
  
  function expected(val: any): ToBeOrNotToBe {
    return {
      toBe: (value: any) => {
        if (value === val) {
          return true;
        } else {
          throw "Not Equal";
        }
      },
      notToBe: (value: any) => {
        if (value !== val) {
          return true;
        } else {
          throw "Equal";
        }
      },
    };
  }