export type Coordinate = 'A1' | 'A2' | 'A3' | 'A4' |
                         'B1' | 'B2' | 'B3' | 'B4' |
                         'C1' | 'C2' | 'C3' | 'C4' |
                         'D1' | 'D2' | 'D3' | 'D4';



  export function coordinateToZeroBasedIndex(coordinate: Coordinate): number {
    const coords = coordinate.split('');
    const xOffset = 'A'.charCodeAt(0);
    const yOffset = 1;
    const y = coords[0].charCodeAt(0) - xOffset;
    const x = +coords[1] - yOffset;
    const sideLength = 4;
    return sideLength * y + x;
  } 