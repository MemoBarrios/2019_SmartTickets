/// <reference path="../../../../../ClientApp/node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { SolicitudesComponent } from './solicitudes.component';

let component: SolicitudesComponent;
let fixture: ComponentFixture<SolicitudesComponent>;

describe('solicitudes component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SolicitudesComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(SolicitudesComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
