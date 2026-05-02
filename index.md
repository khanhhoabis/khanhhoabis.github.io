---
layout: default
title: Home
nav_order: 1
description: "Trang chủ blog của Khanh Hoa - Chuyên gia Chiến lược, Dữ liệu và OKRs."
permalink: /
---

# Chào mừng đến với Không gian Tri thức của Khanh Hoa

Đây là nơi chia sẻ những góc nhìn, phương pháp và kinh nghiệm thực tiễn về **Chiến lược**, **Dữ liệu** và **OKRs**.

## Các nội dung nổi bật

- [Bản tin mới nhất](/news)
- [Hệ thống OKRs cho doanh nghiệp](/okrs)
- [Tư duy hệ thống và Dữ liệu](/data-strategy)

---

### Bài viết gần đây

{% for post in site.posts limit:5 %}
- **[{{ post.title }}]({{ post.url | relative_url }})** - {{ post.date | date: "%d/%m/%Y" }}
{% endfor %}

<br>

> [!TIP]
> Sử dụng thanh tìm kiếm phía trên để nhanh chóng tìm thấy nội dung bạn quan tâm.
