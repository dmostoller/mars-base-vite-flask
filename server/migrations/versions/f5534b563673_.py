"""empty message

Revision ID: f5534b563673
Revises: 024ee8ba69aa
Create Date: 2024-04-21 03:44:17.762284

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f5534b563673'
down_revision = '024ee8ba69aa'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('resources', schema=None) as batch_op:
        batch_op.add_column(sa.Column('color', sa.String(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('resources', schema=None) as batch_op:
        batch_op.drop_column('color')

    # ### end Alembic commands ###
