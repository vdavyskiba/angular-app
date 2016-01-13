import {Pipe} from "angular2/core";

@Pipe({
  name: 'filter'
})

export default class FilterPipe {

  transform(array: Array<Object>, args: string[]): Array<Object> {

    let field: string = args[0];
    let pattern: string = args[1];

    pattern = pattern && pattern.length ? pattern.trim() : '';

    if(!pattern.length) {
      return array;
    }

    return array.filter((a:Object) =>{
      let val = a[field];
      return val && val.toString().indexOf(pattern) !== -1
    });
  }

}
