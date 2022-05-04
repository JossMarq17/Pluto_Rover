# Pluto_Rover
Ejercicio para mover el Rover en Plutón :)

Después de las dos horas pude hacer que el Rover girara y avanzara. Al momento de revisar una segunda prueba con más instrucciones me di cuenta de que el valor de X 
se lo estoy dando al girar el rover, entonces cambiaría esa sentencia del IF para que en lugar de X se vuelva orientación como el otro IF anidado que tengo para 
asignar el valor del giro.

También para la parte del límite estoy pensando en guardar ese valor en una XLIM e YLIM, y agregar una condición para que cuando X sea igual a XLIM el contador vuelva
a reiniciarse ya que sería como si hubiera dado una vuelta al planeta y de misma forma sería con Y y YLIM.

Para la parte del obstaculo estoy pensando en usar una variable a la que le ponga la coordenada del Obstaculo, y que en caso de que el Rover se encuentre con ese
obstaculo meter un break en el código para que lance una alerta de que se encontro con el obstaculo y ya no pudo seguir avanzando. También agregar un mensaje en el 
que pida que insertes las nuevas instrucciones para el Rover, o incluso que mande una sugerencia tomando en cuenta el punto al que queremos llegar y las coordenadas
del obstaculo.
