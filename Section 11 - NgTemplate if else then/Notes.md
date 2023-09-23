# Section 11 - NgTemplate (if, else y then)

## Introduccion a NgTemplate

    - Esto es un ngIf y un else dentro del HTML.

## Crear componente y ruta

    - De manera clasica se haria el mismo ngIf pero invirtiendo la condicion.
    - Pero con el ng-template, se hace:
        <div *ngIf="administrador; else noAdmin">
            <button (click)="cambiar(false)">Cambiar</button>
            <p><strong>Eres el administrador</strong></p>
        </div>

        <ng-template #noAdmin>
            <button (click)="cambiar(true)">Cambiar</button>
            <p><strong>No eres el administrador</strong></p>
        </ng-template>
    - Se puede hacer tambien, solo con ng-template para las dos.
