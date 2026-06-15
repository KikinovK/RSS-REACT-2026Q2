# Performance Optimization Report

## Baseline Measurements

### Interaction A: Sort countries

- **Commit duration**: 3.9s
- **Render duration**: 1169.9ms
- **Screenshot**: ![screenshot](./performance-starter/screenshots/baseline/Screenshot_Sort.png)

### Interaction B: Search countries

- **Commit duration**: 3.9s
- **Render duration**: 446.8ms
- **Screenshot**: ![screenshot](./performance-starter/screenshots/baseline/Screenshot_Search.pngg)

### Interaction C: Change year

- **Commit duration**: 7.6s
- **Render duration**: 1128.7ms
- **Screenshot**: ![screenshot](./performance-starter/screenshots/baseline/Screenshot_Select.png)

### Interaction D: Toggle column

- **Commit duration**: 3.2s
- **Render duration**: 1033.6ms
- **Screenshot**: ![screenshot](./performance-starter/screenshots/baseline/Screenshot_Toggle_1.png)

- **Commit duration**: 7.2s
- **Render duration**: 1179.6ms
- **Screenshot**: ![screenshot](./performance-starter/screenshots/baseline/Screenshot_Toggle_2.png)

- **Commit duration**: 10.4s
- **Render duration**: 1101.8ms
- **Screenshot**: ![screenshot](./performance-starter/screenshots/baseline/Screenshot_Toggle_3.png)

**Total render duration**: 3315ms

## Optimized Measurements

### Interaction A: Sort countries

- **Commit duration**: 2.5s
- **Render duration**: 35.2ms
- **Screenshot**: ![screenshot](./performance-starter/screenshots/optimized/Screenshot_Sort.png)

### Interaction B: Search countries

- **Commit duration**: 2.4s
- **Render duration**: 23.4ms
- **Screenshot**: ![screenshot](./performance-starter/screenshots/optimized/Screenshot_Search.png)

### Interaction C: Change year

- **Commit duration**: 4.5s
- **Render duration**: 89.4ms
- **Screenshot**: ![screenshot](./performance-starter/screenshots/optimized/Screenshot_Select.png)

### Interaction D: Toggle column

- **Commit duration**: 0.9s
- **Render duration**: 13.4ms
- **Screenshot**: ![screenshot](./performance-starter/screenshots/optimized/Screenshot_Toggle_1.png)

- **Commit duration**: 2.7s
- **Render duration**: 39.1ms
- **Screenshot**: ![screenshot](./performance-starter/screenshots/optimized/Screenshot_Toggle_2.png)

- **Commit duration**: 5.1s
- **Render duration**: 2.3ms
- **Screenshot**: ![screenshot](./performance-starter/screenshots/optimized/Screenshot_Toggle_3.png)

**Total render duration**: 54.8ms

## Summary of Improvements

| Interaction      | Baseline (ms) | Optimized (ms) | Improvement |
| ---------------- | ------------- | -------------- | ----------- |
| Sort countries   | 1169.9ms      | 35.2ms         | 96.99%      |
| Search countries | 446.8ms       | 23.4ms         | 94.76%      |
| Change year      | 1128.7ms      | 89.4ms         | 92.08%      |
| Toggle column    | 3315.0ms      | 54.8ms         | 98.35%      |
| **Average**      | **1515.1ms**  | **50.7ms**     | **96.65%%** |
