# vigenereCipher

 The Vigenère cipher is a classic cipher originally developed by Italian cryptographer Giovan Battista Bellaso and published in 1553. It is named after a later French cryptographer Blaise de Vigenère, who had developed a stronger autokey cipher (a cipher that incorporates the message of the text into the key). The cipher is easy to understand and implement, but survived three centuries of attempts to break it, earning it the nickname "le chiffre indéchiffrable" or "the indecipherable cipher."

Assume the key is repeated for the length of the text, character by character. Note that this implementation repeats the key over characters only if they are part of the alphabet and whitespaces. The shift is derived by applying a Caesar shift to a character with the corresponding index of the key in the alphabet. 

Live Version: https://eneamuskaj.github.io/vigenereCipher/
