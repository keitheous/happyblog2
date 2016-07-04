
# Understanding le~ code

1. The output array __(var gradientArray)__ is first declared globally as it is to be used throughout the program.

2. When the __generateGradient function__ takes in 3 arguments, namely, first color (xRGB), second color (yRGB) and steps, they are immediately broken up into fragments and stored in a massive hexadecimal array in __Line 6__. They are grouped in the array according to the following order:
 * zero-th element: RED for the first color (xRGB[0]+xRGB[1]),
 * first element: GREEN for the first color (xRGB[2]+xRGB[3]),
 * second element: BLUE for the first color (xRGB[4]+xRGB[5]),
 * third element: RED for the second color (yRGB[0]+yRGB[1]),
 * forth element: GREEN for the second color (yRGB[2]+yRGB[3]), and lastly,
 * fifth element: BLUE for the second color (yRGB[4]+yRGB[5]]).

3. These elements are then converted from Hexadecimal Numbers into Decimal System in order to make the calculations easier and readable (stored in the massiveDecArray of the same sequence). This is achieved using the following syntax: __parseInt(hexNum, 16)__. parseInt is a function that converts a string into an integer with the format of **" parseInt(string,radix) "**. Putting a 16 at the radix position simply tells the function to present the output from a hexadecimal numeral system. This occured between __Line 7 - 9__.

4. After converting the numbers, the range between the two colors (xRGB & yRGB) are obtained in order to determine the **Gradient Points** based on the number of steps provided by the user. The formula below is used to determine the Range Factor between these Gradient Points. The Red, Green and Blue transition at their respective pace, **resulting in three separate Range Factors (+ve and -ve values)**. This occur between __Line 13 - 15__.

  `**Range Factor(RED/GREEN/BLUE)** = Math.round((firstColor(R,G or B) - secondColor(R,G, or B))/steps);`

5. Once the Range Factors are determined, the function can now produce these Gradient Points by adding the Range Factors to the first Red, Green and Blue. The first Gradient Point (equivelent to the first RGB) is declared in __Line 18__. The iteration of incrementation (rather, decrementation as double -ve produces a +ve) which takes part from __Line 19 - 24__, spits out the remaining Gradient Points which are then stored in the output array declared earlier using the **.push** function. While these gradient points are being pushed into the stack, they are also converted into Hexadecimal numbers using the **" .toString(16).toUpperCase() "** function. Again, the radix 16 here simply tells the function to string the data into the hexadecimal numeral system. The **".slice(-2)"** is used to ensured that the output from the conversion is in the format of **"_ _"** . ~~Previous "0" output only had one significant value (a bug). lol ~~

6. Last but not least, the first and second color is inserted into the output array using the **" .splice "** function in the first and final position, on __line 25 and 26__, to form a complete array.




### Wanna read more? Here's my thought process in solving this fun challenge..
Objectives:
 * Converting between Hexadecimal to Decimal (and vice versa).
 * How do we create an even colour gradient between the two input based on the number of steps given by the user?

## Understanding the Problem
 * First we determine the range between the  two inputs. and then divide the range evenly by the number of steps.
 * In Decimal (Human Language), say if the inputs were:
   1. First Number : 0
   2.	Second Number : 100
   3.	Number of Steps: 4

 * As a result, the 4 points to note here would be 0, 25, 50 and 100
   * Step: 1	  2	   3	  4
   *	     0	  25	 50	  100

## Hexadecimal in RGB
RGB stands for RED GREEN and BLUE, the three primary colours. Each of these colours (R, G and B) take in 2 significant figures. This result in a SIX digit format. The hash ‘#' sign simply indicates that this is hexadecimal.
**| _ _ | _ _ | _ _ **

#000000 => WHITE
#FF0000 => RED
#00FF00 => GREEN
#0000FF => BLUE
#FFFFFF => BLACK
#FFFF00 => YELLOW
#00FFFF => BLUE
#FF00FF => PURPLE

## How will i solve this?
1.	I will first convert these hexadecimal inputs into decimal,
2.	obtain the range between the two inputs,
3.	and divide the range equally by the number of parts to obtain the points.
4. 	These points will then be converted back into hexadecimals and put in an array as output.
