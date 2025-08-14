#include <iostream>
using namespace std;

const int MAX = 100;

// 1. Nhập mảng 2 chiều
void nhapMang(int a[MAX][MAX], int &m, int &n)
{
	cout << "Nhap so dong m: ";
	cin >> m;
	cout << "Nhap so cot n: ";
	cin >> n;
	for (int i = 0; i < m; i++)
	{
		for (int j = 0; j < n; j++)
		{
			cout << "Nhap a[" << i << "][" << j << "]: ";
			cin >> a[i][j];
		}
	}
}

// 2. Xuất mảng 2 chiều
void xuatMang(int a[MAX][MAX], int m, int n)
{
	cout << "\nMang:\n";
	for (int i = 0; i < m; i++)
	{
		for (int j = 0; j < n; j++)
		{
			cout << a[i][j] << "\t";
		}
		cout << endl;
	}
}

// 3. Tìm phần tử Min, Max
void timMinMax(int a[MAX][MAX], int m, int n)
{
	int minVal = a[0][0], maxVal = a[0][0];
	for (int i = 0; i < m; i++)
	{
		for (int j = 0; j < n; j++)
		{
			if (a[i][j] < minVal)
				minVal = a[i][j];
			if (a[i][j] > maxVal)
				maxVal = a[i][j];
		}
	}
	cout << "Gia tri nho nhat: " << minVal << endl;
	cout << "Gia tri lon nhat: " << maxVal << endl;
}

// 4. Sắp xếp zigzag (theo hàng chẵn tăng, hàng lẻ giảm)
void sapXepZigzag(int a[MAX][MAX], int m, int n)
{
	for (int i = 0; i < m; i++)
	{
		for (int j = 0; j < n - 1; j++)
		{
			for (int k = j + 1; k < n; k++)
			{
				if ((i % 2 == 0 && a[i][j] > a[i][k]) ||
						(i % 2 == 1 && a[i][j] < a[i][k]))
				{
					int temp = a[i][j];
					a[i][j] = a[i][k];
					a[i][k] = temp;
				}
			}
		}
	}
}

// 5. Sắp xếp ốc xoáy (gộp toàn bộ phần tử, sắp xếp, rồi ghi theo ốc xoáy)
void sapXepOcXoay(int a[MAX][MAX], int m, int n)
{
	int tong = m * n;
	int arr[MAX * MAX];
	int idx = 0;

	// Lấy tất cả phần tử ra mảng 1 chiều
	for (int i = 0; i < m; i++)
		for (int j = 0; j < n; j++)
			arr[idx++] = a[i][j];

	// Sắp xếp tăng dần
	for (int i = 0; i < tong - 1; i++)
	{
		for (int j = i + 1; j < tong; j++)
		{
			if (arr[i] > arr[j])
			{
				int temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}

	// Ghi lại vào mảng theo ốc xoáy
	int top = 0, bottom = m - 1, left = 0, right = n - 1;
	idx = 0;
	while (top <= bottom && left <= right)
	{
		for (int j = left; j <= right; j++)
			a[top][j] = arr[idx++];
		top++;
		for (int i = top; i <= bottom; i++)
			a[i][right] = arr[idx++];
		right--;
		if (top <= bottom)
		{
			for (int j = right; j >= left; j--)
				a[bottom][j] = arr[idx++];
			bottom--;
		}
		if (left <= right)
		{
			for (int i = bottom; i >= top; i--)
				a[i][left] = arr[idx++];
			left++;
		}
	}
}

// 6. Thêm một dòng v vào cuối
void themDongCuoi(int a[MAX][MAX], int &m, int n, int v)
{
	for (int j = 0; j < n; j++)
	{
		a[m][j] = v;
	}
	m++;
}

// 7. Thêm dòng v vào dòng k
void themDongTaiK(int a[MAX][MAX], int &m, int n, int k, int v)
{
	for (int i = m; i > k; i--)
	{
		for (int j = 0; j < n; j++)
		{
			a[i][j] = a[i - 1][j];
		}
	}
	for (int j = 0; j < n; j++)
	{
		a[k][j] = v;
	}
	m++;
}

// 8. Xóa dòng k
void xoaDongK(int a[MAX][MAX], int &m, int n, int k)
{
	for (int i = k; i < m - 1; i++)
	{
		for (int j = 0; j < n; j++)
		{
			a[i][j] = a[i + 1][j];
		}
	}
	m--;
}

// 9. Tìm phần tử vừa lớn nhất trên dòng vừa nhỏ nhất trên cột
void timPhanTuDacBiet(int a[MAX][MAX], int m, int n)
{
	bool found = false;
	for (int i = 0; i < m; i++)
	{
		int maxDong = a[i][0], cotMax = 0;
		for (int j = 1; j < n; j++)
		{
			if (a[i][j] > maxDong)
			{
				maxDong = a[i][j];
				cotMax = j;
			}
		}
		bool laMinCot = true;
		for (int k = 0; k < m; k++)
		{
			if (a[k][cotMax] < maxDong)
			{
				laMinCot = false;
				break;
			}
		}
		if (laMinCot)
		{
			cout << "Phan tu dac biet: " << maxDong << " tai vi tri [" << i << "][" << cotMax << "]\n";
			found = true;
		}
	}
	if (!found)
		cout << "Khong co phan tu nao phu hop\n";
}

// 10. Tính tổng, tích 2 ma trận
void tongTichMaTran(int a[MAX][MAX], int b[MAX][MAX], int m, int n)
{
	int tong[MAX][MAX], tich[MAX][MAX];
	// Tính tổng
	for (int i = 0; i < m; i++)
		for (int j = 0; j < n; j++)
			tong[i][j] = a[i][j] + b[i][j];
	// Tính tích (theo từng phần tử)
	for (int i = 0; i < m; i++)
		for (int j = 0; j < n; j++)
			tich[i][j] = a[i][j] * b[i][j];

	cout << "Tong 2 ma tran:\n";
	xuatMang(tong, m, n);
	cout << "Tich 2 ma tran:\n";
	xuatMang(tich, m, n);
}

// 11. Tính tổng theo mỗi dòng và cột
void tongDongCot(int a[MAX][MAX], int m, int n)
{
	for (int i = 0; i < m; i++)
	{
		int tong = 0;
		for (int j = 0; j < n; j++)
			tong += a[i][j];
		cout << "Tong dong " << i << ": " << tong << endl;
	}
	for (int j = 0; j < n; j++)
	{
		int tong = 0;
		for (int i = 0; i < m; i++)
			tong += a[i][j];
		cout << "Tong cot " << j << ": " << tong << endl;
	}
}

// 12. Đếm số phần tử dương ở tam giác trên
void demDuongTamGiacTren(int a[MAX][MAX], int m, int n)
{
	int dem = 0;
	for (int i = 0; i < m; i++)
	{
		for (int j = i; j < n; j++)
		{
			if (a[i][j] > 0)
				dem++;
		}
	}
	cout << "So phan tu duong o tam giac tren: " << dem << endl;
}

// 13. Trung bình cộng một cột
void tbcCot(int a[MAX][MAX], int m, int n, int cot)
{
	int tong = 0;
	for (int i = 0; i < m; i++)
		tong += a[i][cot];
	cout << "TBC cot " << cot << ": " << (double)tong / m << endl;
}

// 14. Tổng các phần tử biên
void tongBien(int a[MAX][MAX], int m, int n)
{
	int tong = 0;
	for (int j = 0; j < n; j++)
		tong += a[0][j] + a[m - 1][j];
	for (int i = 1; i < m - 1; i++)
		tong += a[i][0] + a[i][n - 1];
	cout << "Tong cac phan tu tren bien: " << tong << endl;
}

int main()
{
	int a[MAX][MAX], m, n;

	// 1 & 2
	nhapMang(a, m, n);
	xuatMang(a, m, n);

	// 3
	timMinMax(a, m, n);

	// 4
	sapXepZigzag(a, m, n);
	cout << "\nMang sau khi sap xep zigzag:\n";
	xuatMang(a, m, n);

	// 5
	sapXepOcXoay(a, m, n);
	cout << "\nMang sau khi sap xep oc xoay:\n";
	xuatMang(a, m, n);

	// 6
	themDongCuoi(a, m, n, 9);
	cout << "\nMang sau khi them dong cuoi:\n";
	xuatMang(a, m, n);

	// 7
	themDongTaiK(a, m, n, 1, 8);
	cout << "\nMang sau khi them dong tai k=1:\n";
	xuatMang(a, m, n);

	// 8
	xoaDongK(a, m, n, 2);
	cout << "\nMang sau khi xoa dong k=2:\n";
	xuatMang(a, m, n);

	// 9
	timPhanTuDacBiet(a, m, n);

	// 10
	int b[MAX][MAX];
	cout << "\nNhap ma tran B:\n";
	nhapMang(b, m, n);
	tongTichMaTran(a, b, m, n);

	// 11
	tongDongCot(a, m, n);

	// 12
	demDuongTamGiacTren(a, m, n);

	// 13
	tbcCot(a, m, n, 0); // Tính TBC cột 0

	// 14
	tongBien(a, m, n);

	return 0;
}
