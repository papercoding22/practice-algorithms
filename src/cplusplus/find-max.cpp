#include <iostream>

// Array
int findMax(int arr[])
{
	int max = arr[0];
	for (int i = 1; i < 5; i++)
	{
		if (arr[i] > max)
		{
			max = arr[i];
		}
	}
	return max;
}

int main()
{
	int arr[5] = {1, 2, 3, 4, 5};
	int max = findMax(arr);
	std::cout << "The maximum value in the array is: " << max << std::endl;
	return 0;
}