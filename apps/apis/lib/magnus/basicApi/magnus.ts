import {
    Double,
    Float,
    Int32,
    Uint32,
    Sint32,
    Fixed32,
    Sfixed32,
    Int64,
    Uint64,
    Sint64,
    Fixed64,
    Sfixed64,
    Bool,
    String,
    Bytes,
    Empty
} from '@notadd/magnus-core';
import { Observable } from 'rxjs';

export interface PageSettingWidget {
	code?: string;
	title?: string;
	/*```ts
{[key:string]: 'default'|'readonly'|'hidden'}
```*/
	fields?: object;
	/*```ts
export class PageSettingWidgetAction {
   title: string;
   display: boolean;
}
{[key:string]: PageSettingWidgetAction}
```*/
	actions?: object;
}
export interface PageSettingResult {
	title?: string;
	code?: string;
	url?: string;
	widgets?: PageSettingWidget[];
}
export interface Page {
	title?: string;
}