/// <reference path="../../../../../ClientApp/node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { IncidentesComponent } from './incidentes.component';

let component: IncidentesComponent;
let fixture: ComponentFixture<IncidentesComponent>;

describe('incidentes component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ IncidentesComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(IncidentesComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
