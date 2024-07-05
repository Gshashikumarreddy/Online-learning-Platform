function generateCode() {
    const language = document.getElementById('language').value;
    const algorithm = document.getElementById('algorithm').value.toLowerCase();
    let code = '';

    if (algorithm) {
        code = generateAlgorithmCode(language, algorithm);
    } else {
        code = generateTemplateCode(language);
    }

    document.getElementById('codeOutput').textContent = code;
}

function generateTemplateCode(language) {
    let code = '';

    switch (language) {
        case 'html':
            code = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>`;
            break;
        case 'css':
            code = `body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
}

h1 {
    color: #333;
}`;
            break;
        case 'javascript':
            code = `document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello, World!');
});`;
            break;
        case 'java':
            code = `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`;
            break;
        case 'python':
            code = `print("Hello, World!")`;
            break;
        default:
            code = 'Please select a language.';
    }

    return code;
}

function generateAlgorithmCode(language, algorithm) {
    let code = '';

    const algorithms = {
        'bubble sort': {
            python: `def bubble_sort(arr):
        n = len(arr)
        for i in range(n):
            for j in range(0, n-i-1):
                if arr[j] > arr[j+1]:
                    arr[j], arr[j+1] = arr[j+1], arr[j]
        return arr`,
            javascript: `function bubbleSort(arr) {
        let n = arr.length;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        return arr;
    }`,
            java: `public class BubbleSort {
        public static void bubbleSort(int[] arr) {
            int n = arr.length;
            for (int i = 0; i < n - 1; i++) {
                for (int j = 0; j < n - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        int temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
        }
    }`
        },
        'binary search': {
            python: `def binary_search(arr, x):
        low = 0
        high = len(arr) - 1
        mid = 0
    
        while low <= high:
            mid = (high + low) // 2
    
            if arr[mid] < x:
                low = mid + 1
            elif arr[mid] > x:
                high = mid - 1
            else:
                return mid
        return -1`,
            javascript: `function binarySearch(arr, x) {
        let low = 0;
        let high = arr.length - 1;
        
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            
            if (arr[mid] < x) {
                low = mid + 1;
            } else if (arr[mid] > x) {
                high = mid - 1;
            } else {
                return mid;
            }
        }
        return -1;
    }`,
            java: `public class BinarySearch {
        public static int binarySearch(int[] arr, int x) {
            int low = 0;
            int high = arr.length - 1;
            
            while (low <= high) {
                int mid = (low + high) / 2;
                
                if (arr[mid] < x) {
                    low = mid + 1;
                } else if (arr[mid] > x) {
                    high = mid - 1;
                } else {
                    return mid;
                }
            }
            return -1;
        }
    }`
        },
        'fibonacci': {
            python: `def fibonacci(n):
        if n <= 0:
            return []
        elif n == 1:
            return [0]
        elif n == 2:
            return [0, 1]
        
        fib_seq = [0, 1]
        for i in range(2, n):
            fib_seq.append(fib_seq[-1] + fib_seq[-2])
        return fib_seq`,
            javascript: `function fibonacci(n) {
        if (n <= 0) return [];
        if (n === 1) return [0];
        if (n === 2) return [0, 1];
        
        let fib_seq = [0, 1];
        for (let i = 2; i < n; i++) {
            fib_seq.push(fib_seq[i - 1] + fib_seq[i - 2]);
        }
        return fib_seq;
    }`,
            java: `import java.util.ArrayList;
    import java.util.List;
    
    public class Fibonacci {
        public static List<Integer> fibonacci(int n) {
            List<Integer> fibSeq = new ArrayList<>();
            if (n <= 0) return fibSeq;
            if (n == 1) {
                fibSeq.add(0);
                return fibSeq;
            }
            if (n == 2) {
                fibSeq.add(0);
                fibSeq.add(1);
                return fibSeq;
            }
            fibSeq.add(0);
            fibSeq.add(1);
            for (int i = 2; i < n; i++) {
                fibSeq.add(fibSeq.get(i - 1) + fibSeq.get(i - 2));
            }
            return fibSeq;
        }
    }`
        },
        'quick sort': {
            python: `def quick_sort(arr):
        if len(arr) <= 1:
            return arr
        pivot = arr[len(arr) // 2]
        left = [x for x in arr if x < pivot]
        middle = [x for x in arr if x == pivot]
        right = [x for x in arr if x > pivot]
        return quick_sort(left) + middle + quick_sort(right)`,
            javascript: `function quickSort(arr) {
        if (arr.length <= 1) return arr;
        let pivot = arr[Math.floor(arr.length / 2)];
        let left = arr.filter(x => x < pivot);
        let middle = arr.filter(x => x === pivot);
        let right = arr.filter(x => x > pivot);
        return [...quickSort(left), ...middle, ...quickSort(right)];
    }`,
            java: `public class QuickSort {
        public static void quickSort(int[] arr, int low, int high) {
            if (low < high) {
                int pi = partition(arr, low, high);
                quickSort(arr, low, pi - 1);
                quickSort(arr, pi + 1, high);
            }
        }
    
        private static int partition(int[] arr, int low, int high) {
            int pivot = arr[high];
            int i = (low - 1);
            for (int j = low; j < high; j++) {
                if (arr[j] < pivot) {
                    i++;
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
            int temp = arr[i + 1];
            arr[i + 1] = arr[high];
            arr[high] = temp;
            return i + 1;
        }
    }`
        },
        'merge sort': {
            python: `def merge_sort(arr):
        if len(arr) <= 1:
            return arr
        mid = len(arr) // 2
        left = merge_sort(arr[:mid])
        right = merge_sort(arr[mid:])
        return merge(left, right)
    
    def merge(left, right):
        result = []
        i = j = 0
        while i < len(left) and j < len(right):
            if left[i] < right[j]:
                result.append(left[i])
                i += 1
            else:
                result.append(right[j])
                j += 1
        result.extend(left[i:])
        result.extend(right[j:])
        return result`,
            javascript: `function mergeSort(arr) {
        if (arr.length <= 1) return arr;
        const mid = Math.floor(arr.length / 2);
        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid));
        return merge(left, right);
    }
    
    function merge(left, right) {
        let result = [];
        let i = 0, j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
        return result.concat(left.slice(i)).concat(right.slice(j));
    }`,
            java: `public class MergeSort {
        public static void mergeSort(int[] arr, int l, int r) {
            if (l < r) {
                int m = (l + r) / 2;
                mergeSort(arr, l, m);
                mergeSort(arr, m + 1, r);
                merge(arr, l, m, r);
            }
        }
    
        private static void merge(int[] arr, int l, int m, int r) {
            int n1 = m - l + 1;
            int n2 = r - m;
            int[] L = new int[n1];
            int[] R = new int[n2];
            System.arraycopy(arr, l, L, 0, n1);
            System.arraycopy(arr, m + 1, R, 0, n2);
            int i = 0, j = 0;
            int k = l;
            while (i < n1 && j < n2) {
                if (L[i] <= R[j]) {
                    arr[k] = L[i];
                    i++;
                } else {
                    arr[k] = R[j];
                    j++;
                }
                k++;
            }
            while (i < n1) {
                arr[k] = L[i];
                i++;
                k++;
            }
            while (j < n2) {
                arr[k] = R[j];
                j++;
                k++;
            }
        }
    }`
        },
        'linear search': {
            python: `def linear_search(arr, x):
        for i in range(len(arr)):
            if arr[i] == x:
                return i
        return -1`,
            javascript: `function linearSearch(arr, x) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === x) {
                return i;
            }
        }
        return -1;
    }`,
            java: `public class LinearSearch {
        public static int linearSearch(int[] arr, int x) {
            for (int i = 0; i < arr.length; i++) {
                if (arr[i] == x) {
                    return i;
                }
            }
            return -1;
        }
    }`
        },
        'insertion sort': {
            python: `def insertion_sort(arr):
        for i in range(1, len(arr)):
            key = arr[i]
            j = i-1
            while j >= 0 and key < arr[j]:
                arr[j + 1] = arr[j]
                j -= 1
            arr[j + 1] = key
        return arr`,
            javascript: `function insertionSort(arr) {
        for (let i = 1; i < arr.length; i++) {
            let key = arr[i];
            let j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
        return arr;
    }`,
            java: `public class InsertionSort {
        public static void insertionSort(int[] arr) {
            for (int i = 1; i < arr.length; i++) {
                int key = arr[i];
                int j = i - 1;
                while (j >= 0 && arr[j] > key) {
                    arr[j + 1] = arr[j];
                    j = j - 1;
                }
                arr[j + 1] = key;
            }
        }
    }`
        }
    };

    if (algorithms[algorithm] && algorithms[algorithm][language]) {
        code = algorithms[algorithm][language];
    } else {
        code = 'Algorithm or language not supported.';
    }

    return code;
}
