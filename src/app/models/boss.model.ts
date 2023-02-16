export type Boss = 'Elecman' | 'Cutman' | 'Iceman' | 'Fireman';


export function haveSameBosses(bosses1: Array<Boss>, bosses2: Array<Boss>): boolean {
    if (bosses1.length !== bosses2.length) {
      return false;
    }
    let matches = 0;
    bosses1.forEach(
      boss => {
        if (bosses2.includes(boss)) {
          matches++;
        }
      }
    );
    return matches === bosses1.length;
  }
