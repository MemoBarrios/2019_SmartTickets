/// <reference path="../../../../ClientApp/node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { SidebarComponent } from './sidebar.component';

let component: SidebarComponent;
let fixture: ComponentFixture<SidebarComponent>;

describe('sidebar component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SidebarComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(SidebarComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
