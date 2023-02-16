import { Boss } from "./boss.model";
import { Coordinate } from "./coordinate.model";


export interface Password {
    
    /** Defeated boss list */
    defeated: Array<Boss>;

    password: Array<Coordinate>;

}
