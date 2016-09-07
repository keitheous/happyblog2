Code Challenge Preview~
http://keitheous.com/le_color_steps_fun_challenge/
Hosted by GH pages!

# Understanding le~ code

1. The output array __(var gradientArray)__ is first declared globally as it is to be used throughout the program.

2. When the __generateGradient function__ takes in 3 arguments, namely, first color (xRGB), second color (yRGB) and steps, they are immediately broken up into fragments and stored in a massive hexadecimal array on __Line 8__. They are grouped in the array according to the following order:
 * zero-th element: RED for the first color (xRGB[0]+xRGB[1]),
 * first element: GREEN for the first color (xRGB[2]+xRGB[3]),
 * second element: BLUE for the first color (xRGB[4]+xRGB[5]),
 * third element: RED for the second color (yRGB[0]+yRGB[1]),
 * forth element: GREEN for the second color (yRGB[2]+yRGB[3]), and lastly,
 * fifth element: BLUE for the second color (yRGB[4]+yRGB[5]]).

3. These elements are then converted from Hexadecimal Numbers into Decimal System in order to make the calculations easier and readable (stored in the massiveDecArray of the same sequence). This is achieved using the following syntax: __parseInt(hexNum, 16)__. parseInt is a function that converts a string into an integer with the format of **" parseInt(string,radix) "**. Putting a 16 at the radix position simply tells the function to present the output from a hexadecimal numeral system. This can be seen between __Line 11 - 13__.

4. After converting the numbers, the range between the two colors (xRGB & yRGB) are obtained in order to determine the **Gradient Points** based on the number of steps provided by the user. The formula below is used to determine the Range Factor between these Gradient Points. The Red, Green and Blue transition at their respective pace, **resulting in three separate floating Range Factors (+ve and -ve values)**. This takes place between __Line 20 - 22__.

  `Range Factor(RED/GREEN/BLUE) = (firstColor(R,G or B) - secondColor(R,G, or B))/steps`

5. Once the Range Factors are determined, the function can now produce Gradient Points by adding multiple Range Factors to the first Red, Green and Blue. The first Gradient Point (equivalent to the first RGB) is declared on __Line 26__. An empty array called **nextGradientPoint** is declared to temporarily hold the next Gradient Point as the FOR LOOP(__Line 29-40__) iterates through i. These Gradient Points are then stored in **gradientArray**, declared at the beginning, using the **.push** function, as shown on __Line 37__. At the same time, these numbers are also converted into Hexadecimal numbers using the **" .toString(16).toUpperCase() "** function. Again, the radix 16 here simply tells the function to string the data into the hexadecimal numeral system.

6. The **".slice(-2)"** is used to ensured that the output from the conversion is in the format of **"_ _"** , as previous version's "0" output only had one significant value (a bug). In addition to that, the previous version had **Math.round** applied to the Range Factor, causing a massive error in the color gradient after adding the numbers to the RGB values in cases where the steps are too big. A solution, as suggested by David (Thank you!), was to round the numbers up AFTER obtaining the floating RGB values. The rounding of values now occurs between __Line 32-34__.


### Wanna read more? Here's my thought process in solving this fun challenge..
__Objectives:__
 * Converting between Hexadecimal to Decimal (and vice versa).
 * How do we create an even colour gradient between the two input based on the number of steps given by the user?

#### Understanding the Problem
 * First we determine the range between the  two inputs. and then divide the range evenly by the number of steps.
 * In Decimal (Human Language), say if the inputs were:
   1. First Number : 0
   2.	Second Number : 100
   3.	Number of Steps: 4

 * As a result, the 4 points to note here would be 0, 25, 50 and 100
   * Step: 1	  2	   3	  4
   *	     0	  25	 50	  100

#### Hexadecimal in RGB
RGB stands for RED GREEN and BLUE, the three primary colours. Each of these colours (R, G and B) take in 2 significant figures. This result in a SIX digit format.
**| _ _ | _ _ | _ _ **

 * __"#000000" => Black

 * __"#FF0000" => RED__

 * __"#0000FF" => BLUE__

 * __"#00FF00" => GREEN"__

 * "__#FFFFFF" => WHITE__

 * combining RED + BLUE = PURPLE, etc..

#### How will i solve this?
1.	I will first convert these hexadecimal inputs into decimal,
2.	obtain the range between the two inputs,
3.	and divide the range equally by the number of parts
4.  Then, I'll add these values together to obtain the points - multiply. 
4. 	These points will then be converted back into hexadecimals and put in an array as output.
