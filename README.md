# react-06-product 프로젝트

상품에 대한 목록과 상세를 보여주는 것이 목적인 프로그램

## 상품에 대한 목록 페이지
사용자가 목록을 보고 싶다는 요청
- 목록 API : https://dummyjson.com/products?limit=12

## 상품 상세 페이지
사용자가 상품에 대한 상세를 보고 싶다는 요청
- 상세 API : https://dummyjson.com/products/${id}

## 페이지 구성
- 목록 데이터를 출력하는 페이지 컴포넌트
    - ProductList

- 상품 데이터를 출력하는 페이지 컴포넌트
    - ProductDetail

## 라우터 구성

라우터에 대한 설계
(우리가 원하는 페이지를 어떠한 주소로 매칭시킬 것인가)

목록페이지
- "/" : (사이트의 최상단 경로) <= <ProductList />

상품 상세 페이지
- "/product/:id" <= <ProductDetail />


{/*
/로 구성되는 자리가 2개이면 무조건 2개를 맞춰줘야함.
첫번째 자리는 product이고, 두번째 자리는 아무거나
*/}