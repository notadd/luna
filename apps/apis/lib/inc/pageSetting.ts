import { Magnus, Query } from "@notadd/magnus-core";
import { GetSelectionSet, SelectionSet } from '@notadd/magnus-typeorm';
import { SFSchema } from '@delon/form';
import pagesettings from './pageSettings';
@Magnus()
export class PageSetting {
    @Query()
    pageSetting(url: string, @GetSelectionSet() set: SelectionSet): any {
        return pagesettings.find(it => it.url === url);
    }
}