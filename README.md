# GHOST_ABP_Grupo14

## Repositorio para alojamiento de pruebas E2E


### Grupo 14
Semana 5

### Integrantes del equipo:

Bryan Camilo Castro ([bc.castro@uniandes.edu.co](mailto:bc.castro@uniandes.edu.co))

Luis Alberto Mendoza Hernández ([l.mendozah@uniandes.edu.co](mailto:l.mendozah@uniandes.edu.co))

Hernán David Martínez Domínguez ([hd.martinezd1@uniandes.edu.co](mailto:hd.martinezd1@uniandes.edu.co))

Josué Federico Vaca Rodríguez([j.vacaq@uniandes.edu.co](mailto:j.vacaq@uniandes.edu.co))

_________________
## Tutorial Entrega Semana 5 Ghost - Pruebas Automatizadas de Software
_________________

### Video de ejecución de las pruebas

A continuación, usted encontrará un enlace a un video con el paso a paso completo desde cero para la correcta ejecución de los tests, tanto en Cypress como en Kraken, en caso tal de necesitar detalles adicionales sobre cómo ejecutar las pruebas:

[Video demostración pruebas Cypress y Kraken - OneDrive (live.com)](https://onedrive.live.com/?id=644491BD15A40DEC%21447518&cid=644491BD15A40DEC)

![image](https://github.com/CamiloCastro-MISO/GHOST_ABP_Grupo14/assets/142316799/da7a4301-9fbf-4ebf-a7bf-e34d8a2bca94)


______________
## Paso a paso para ejecutar las pruebas

A continuación, encontrará los pasos para poder ejecutar exitosamente las pruebas de la aplicacion Ghost de forma local: 

1. Clone el repositorio encontrado en  https://github.com/CamiloCastro-MISO/GHOST_ABP_Grupo14. Para esto, puede usar el comando: 
    
    ```bash
    git clone https://github.com/CamiloCastro-MISO/GHOST_ABP_Grupo14
    ```
   

### Para ejecutar las pruebas con Cypress:

**Requisitos:**

**Nota:** Asumimos que usted tiene instalada una copia local del CMS Ghost, sobre el cual se ejecutarán las pruebas. Si no lo ha instalado, consulte este enlace:
https://ghost.org/docs/install/local/. Si ya lo tiene instalao, borre las configuraciones.


Es necesario tener instalado Python.

Una vez cumpla con estos requisitos:

1. Instale ***nodeenv*** dentro del entorno virtual utilizando pip:

```powershell
pip install nodeenv
```

2. Active el ambiente virtual:

```powershell
.\venv_cypress\Scripts\activate
```

3. Ubíquese en la carpeta que contiene las pruebas de Cypress:

```powershell
cd .\CYPRESS\
```

4. Instale los paquetes:

```powershell
npm install
```

5. Ejecute el siguiente comando para correr los tests:

```powershell
npx cypress run
```

**Opcional:** Si quiere utilizar la interfaz gráfica de Cypress, remplace “run” por “open”:

```powershell
npx cypress open
```

Con estos pasos, usted debería estar viendo la ejecución de los tests en consola o en la aplicación de Cypress en caso de que haya optado por esta opción.
______________________________

### Para ejecutar las pruebas con Kraken:

**Requisitos:**

Es necesario tener instalado Python y la suite de android Studio, además de haber clonado el repositorio.

Una vez cumpla con estos requisitos:

1. Instale ***nodeenv*** dentro del entorno virtual utilizando pip:

```powershell
pip install nodeenv
```

2. Active el ambiente virtual:

```powershell
.\venv_kraken\Scripts\activate
```

3. Ubíquese en la carpeta que contiene las pruebas de Kraken:

```powershell
cd .\KRAKEN\
```

4. Instale los paquetes:

```powershell
npm install
```

5. Ejecute el siguiente comando para correr los tests:

```powershell
npx kraken-node run
```

Con estos pasos, usted debería estar viendo la ejecución de los tests en el navegador Chrome.
