
import math

#1.Calcula el área de un círculo dado su radio

radio = 10;
areaCirculo = math.pi*math.pow(radio, 2)
print("El área del círculo es: " + str(round(areaCirculo, 2)))

#2. Encuentra la hipotenusa de un triángulo rectángulo

C1 = 3.0;
C2 = 4.0;
H = math.sqrt(math.pow(C1, 2)+math.pow(C2, 2))
print("La Hipotenusa es " + str(H))

#3 Convierte en grados a radianes

grados = 270
radianes = grados*(math.pi/180)
print(str(grados) + " grados son " + str(round(radianes, 2)) + " radianes.")

#5.Calcula la distancia recorrida por un objeto en caída libre

vI = 0
t = 5
g = 9.81

distancia = (vI * t) + 0.5 * g * math.pow(t, 2);

print (f"La distancia recorrida es: {distancia} metros")

# 6.Calcula el volumen de una esfera

radioEsf = 15
vEsf = (4/3)*math.pi*math.pow(radioEsf, 3)
print(f"El volumen de la esfera es: {round(vEsf, 2)}")

# 7 Encuentra la distancia entre dos puntos en el plano

x1 = 3
x2 = 5
y1 = 4
y2 = 6

distP = math.sqrt(math.pow(x2-x1,2)+math.pow(y2-y1,2))

print(f"La distancia entre los puntos 1 y 2 es: {round(distP, 2)}")

# 8 Calcula la energía cinética de un objeto

masa = 5
velocidad = 6

eC = 0.5*masa*math.pow(velocidad,2)

print(f"La energía cinética del objeto es: {eC} J")

#9 Calcula el área de un triángulo conociendo sus tres lados (formula de Heron)

a = 3
b = 4
c = 5
s = (a+b+c)/2

areaTi = math.sqrt(s*(s-a)*(s-b)*(s-c))

print(f"El área del triángulo es: {areaTi}")