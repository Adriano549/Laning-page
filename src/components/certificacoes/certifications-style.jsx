import styled from "styled-components";

export const Container = styled.section`
    padding: 100px 40px;
    background: linear-gradient(135deg, #0f051a 0%, #1e0d2e 50%, #0f051a 100%);
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
            radial-gradient(circle at 15% 25%, rgba(225, 13, 253, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 85% 75%, rgba(175, 13, 94, 0.05) 0%, transparent 50%);
        pointer-events: none;
    }

    .header {
        text-align: center;
        margin-bottom: 80px;

        h2 {
            font-size: 36px;
            font-weight: 600;
            color: #ffffff;
            text-shadow: 0 0 20px rgba(225, 13, 253, 0.5);
            margin-bottom: 15px;
            position: relative;

            &::after {
                content: '';
                position: absolute;
                bottom: -10px;
                left: 50%;
                transform: translateX(-50%);
                width: 120px;
                height: 4px;
                background: linear-gradient(90deg, #e10dfd, #af0d5e);
                border-radius: 2px;
            }
        }

        p {
            font-size: 18px;
            color: #b0b0b0;
            margin-bottom: 40px;
        }
    }

    @media (max-width: 768px) {
        padding: 80px 20px;

        .header {
            margin-bottom: 60px;

            h2 {
                font-size: 28px;
            }

            p {
                font-size: 16px;
            }
        }
    }
`;

export const StatsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 40px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }
`;

export const StatItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px;
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        border-color: #e10dfd;
        box-shadow: 0 10px 30px rgba(225, 13, 253, 0.2);
    }

    svg {
        font-size: 24px;
        color: #e10dfd;
    }

    .number {
        font-size: 28px;
        font-weight: 700;
        color: #ffffff;
        text-shadow: 0 0 15px rgba(225, 13, 253, 0.5);
    }

    .label {
        font-size: 14px;
        color: #b0b0b0;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
`;

export const CourseGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 30px;
    max-width: 1400px;
    margin: 0 auto;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 25px;
    }
`;

export const CategorySection = styled.div`
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02));
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.4s ease;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, ${props => props.color}, ${props => props.color}aa);
        transform: ${props => props.isActive ? 'scaleX(1)' : 'scaleX(0)'};
        transition: transform 0.4s ease;
        transform-origin: left;
    }

    &:hover {
        transform: translateY(-10px);
        border-color: ${props => props.color}60;
        box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.3),
            0 0 40px ${props => props.color}30;

        &::before {
            transform: scaleX(1);
        }
    }

    .courses-list {
        padding: 25px;
        max-height: ${props => props.isActive ? '1000px' : '300px'};
        overflow: hidden;
        transition: max-height 0.4s ease;
    }

    @media (max-width: 768px) {
        .courses-list {
            max-height: none;
            overflow: visible;
        }
    }
`;

export const CategoryHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.04));
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    .category-info {
        display: flex;
        align-items: center;
        gap: 15px;

        .icon {
            font-size: 28px;
            color: ${props => props.color};
            filter: drop-shadow(0 0 10px ${props => props.color}60);
        }

        h3 {
            font-size: 18px;
            font-weight: 600;
            color: #ffffff;
            margin: 0;
        }

        .hours {
            font-size: 14px;
            color: ${props => props.color};
            font-weight: 500;
        }
    }

    .course-count {
        background: linear-gradient(135deg, ${props => props.color}30, ${props => props.color}20);
        color: #ffffff;
        padding: 8px 15px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        border: 1px solid ${props => props.color}40;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 15px;
        text-align: center;

        .category-info {
            flex-direction: column;
            gap: 10px;
        }
    }
`;

export const CourseCard = styled.div`
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01));
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 15px 20px;
    margin-bottom: 12px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 4px;
        background: ${props => props.color};
        transform: scaleY(0);
        transition: transform 0.3s ease;
        transform-origin: top;
    }

    &:hover {
        transform: translateX(10px);
        border-color: ${props => props.color}40;
        background: linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.04));

        &::before {
            transform: scaleY(1);
        }

        .course-name {
            color: ${props => props.color};
        }
    }

    .course-name {
        font-size: 14px;
        color: #e0e0e0;
        font-weight: 400;
        line-height: 1.4;
        transition: color 0.3s ease;
    }

    &:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 768px) {
        padding: 12px 15px;
        margin-bottom: 10px;

        &:hover {
            transform: translateX(5px);
        }

        .course-name {
            font-size: 13px;
        }
    }
`;